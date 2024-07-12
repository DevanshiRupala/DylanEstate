import { createProperty, preview } from './property.repository.js';
import { jsonReponse } from '../lib/json-response.js';
import { HttpStatus } from '../lib/http-status.js';
import { sendOTP } from './property.service.js';
import { varifyOtp } from './property.service.js';

export const createPropertyAction = async (req, res) => {
    try {
        const data = await createProperty(req.body.formData);
        return jsonReponse.success(res, data, HttpStatus.OK);
    } catch (err) {
        console.error('Error creating property:', err);
        return jsonResponse.error(res, err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
};

export const sendOTPController = async (req, res) => {
    const { contact } = req.query;
    try {
        const result = await sendOTP(contact);
        return jsonReponse.success(res, result, HttpStatus.OK);
    } catch (error) {
        console.error('Error sending OTP:', error);
        return jsonReponse.error(res, 'Failed to send OTP', HttpStatus.INTERNAL_SERVER_ERROR);
    }
};

export const verifyOTPController = async (req, res) => {
    const { contact, otp } = req.query;
    try {
        const result = await varifyOtp(contact, otp);
        return jsonReponse.success(res, result, HttpStatus.OK);
    } catch (error) {
        console.error('Error verifying OTP:', error);
        return jsonReponse.error(res, 'Failed to verify OTP', HttpStatus.INTERNAL_SERVER_ERROR);
    }
};

export const previewAction = async (req,res) => {
    const _id = req.query._id;
    console.log(_id)
    try {
        const result = await preview(_id);
        console.log(result);
        return jsonReponse.success(res, result, HttpStatus.OK);
    } catch (error) {
        console.error('Error in Preview:', error);
        return jsonReponse.error(res, 'Failed to fetch details', HttpStatus.INTERNAL_SERVER_ERROR);
    }
}