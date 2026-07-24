import { SignJWT, jwtVerify } from "jose";
import "bcryptjs";
//#region src/lib/auth.ts
var secret = new TextEncoder().encode("");
var COOKIE_NAME = "mhh_session";
async function verifyPassword(password) {
	return false;
}
async function createSessionToken() {
	return new SignJWT({ admin: true }).setProtectedHeader({ alg: "HS256" }).setExpirationTime("8h").sign(secret);
}
async function verifySessionToken(token) {
	try {
		await jwtVerify(token, secret);
		return true;
	} catch {
		return false;
	}
}
function getSessionCookieOptions() {
	return {
		name: COOKIE_NAME,
		httpOnly: true,
		secure: true,
		sameSite: "strict",
		path: "/",
		maxAge: 3600 * 8
	};
}
//#endregion
export { verifySessionToken as a, verifyPassword as i, createSessionToken as n, getSessionCookieOptions as r, COOKIE_NAME as t };
