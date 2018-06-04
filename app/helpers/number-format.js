import { helper } from '@ember/component/helper';

export function numberFormat(params /*, hash*/ ) {
	if (isNaN(params)) {
		// throw new TypeError("num is not a number");
		// console.warn("input is not a number")
		return params;
	} else {
		let groups = (/([\-\+]?)(\d*)(\.\d+)?/g).exec("" + params),
			mask = groups[1], //符号位
			integers = (groups[2] || "").split(""), //整数部分
			decimal = groups[3] || "", //小数部分
			remain = integers.length % 3;

		let temp = integers.reduce(function(previousValue, currentValue, index) {
			if (index + 1 === remain || (index + 1 - remain) % 3 === 0) {
				return previousValue + currentValue + ",";
			} else {
				return previousValue + currentValue;
			}
		}, "").replace(/\,$/g, "");
		return mask + temp + decimal;
	}
}

export default helper(numberFormat);
