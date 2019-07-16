import React from 'react';
import { isTSAnyKeyword } from '@babel/types';

import { abbreviateNumber } from './mathUtils';

describe("Math Util", () => {
    it("should return the abbreviated amount", () => {
        expect(abbreviateNumber(1000)).toEqual("1.0K");
    });
    it("should return null if the input number is null", () => {
        expect(abbreviateNumber(null)).toEqual(null);
    });
    it("should return 0 if the input number is 0", () => {
        expect(abbreviateNumber(0)).toEqual("0");
    });
    it("should return the number itself if its less than 1000", () => {
        expect(abbreviateNumber(10)).toEqual("10");
    });
    it("should return the number upto 1 decimal place if its less than 1", () => {
        expect(abbreviateNumber(0.1)).toEqual("0.1");
    });
});