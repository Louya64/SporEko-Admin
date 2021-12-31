import polyglotI18nProvider from "ra-i18n-polyglot";
import frenchMessages from "./i18n/fr";

const messages = {
	en: () => import("./i18n/en").then((messages) => messages.default),
};

export default polyglotI18nProvider((locale) => {
	if (locale === "en") {
		return messages[locale]();
	}
	return frenchMessages;
}, "fr");
