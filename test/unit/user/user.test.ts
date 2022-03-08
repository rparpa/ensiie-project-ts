import {User} from "../../../src/user/user";

describe('User class', () => {
    test('getAge with birthday in the past', () => {
        const birthDay = new Date();
        birthDay.setFullYear(new Date().getFullYear() - 10);
        const user = new User(1, 'User', '10 years', birthDay);
        expect(user.getAge()).toBe(10);
    });

    test('getAge with birthday now', () => {
        const birthDay = new Date();
        const user = new User(1, 'User', '0 year', birthDay);
        expect(user.getAge()).toBe(0);
    });

    test('getAge with birthday in the future', () => {
        const birthDay = new Date();
        birthDay.setFullYear(new Date().getFullYear() + 10);
        const user = new User(1, 'User', '10 year', birthDay);
        expect(() => user.getAge()).toThrow(RangeError);
    });
})