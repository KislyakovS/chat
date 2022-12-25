type Validator = (s: string) => boolean;

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const RU_MOBILE_PHONE_REGEXP = /^(\+?7|8)?9\d{9}$/;
const CAPITALIZE_REGEXP = /^[A-Z][a-z]+/;
const LATIN_ALPHA_REGEXP = /^[A-Z]+$/i;
const LATIN_ALPHANUMERIC_REGEXP = /^[0-9A-Z]+$/i;
const NUMERIC_REGEXP = /[0-9]+/;
const UPPER_CASE_REGEXP = /[A-Z]+/;

// eslint-disable-next-line max-len
export const isValid = (str: string, validators: Validator[]) => validators.every((validator) => validator(str));

export const comprisesNumeric = (str: string) => NUMERIC_REGEXP.test(str);
export const comprisesUpperCase = (str: string) => UPPER_CASE_REGEXP.test(str);

export const isEmpty = (str: string) => str.trim().length === 0;
export const isEmail = (str: string) => EMAIL_REGEXP.test(str);
export const isRuMobilePhone = (str: string) => RU_MOBILE_PHONE_REGEXP.test(str);
export const isLength = (min: number, max: number) => (str: string) => {
	const { length } = str.trim();

	return length >= min && length <= max;
};
export const isCapitalize = (str: string) => CAPITALIZE_REGEXP.test(str);
export const isLatinAlpha = (str: string) => LATIN_ALPHA_REGEXP.test(str);
export const isLatinAlphaNumeric = (str: string) => LATIN_ALPHANUMERIC_REGEXP.test(str);

export const isLogin = (str: string) => isValid(str, [
	isLength(3, 20),
	isLatinAlphaNumeric,
]);
export const isPassword = (str: string) => isValid(str, [
	isLength(8, 40),
	isLatinAlphaNumeric,
	comprisesNumeric,
	comprisesUpperCase,
]);
export const isUserName = (str: string) => isValid(str, [
	isCapitalize,
	isLatinAlpha,
]);
