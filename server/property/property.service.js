import nodemailer from 'nodemailer';

let otpStore = {};

export function varifyOtp(contact, otp) {
    const storedOtpData = otpStore[contact];

    if (!storedOtpData) {
        return { verified: false, message: 'OTP not found or expired' };
    }

    if (storedOtpData.otp == otp && (storedOtpData.expirationTime - Date.now()) > 0) {
        delete otpStore[contact];
        return { verified: true, message: 'OTP verified' };
    } else {
        return { verified: false, message: 'Invalid OTP or OTP expired' };
    }
}

export function sendOTP(contact) {
    const otp = Math.floor(1000 + Math.random() * 9000);
    const expirationTime = Date.now() + 60000;
    otpStore[contact] = { otp, expirationTime };

    if (contact.includes("@")) {
        try {
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                requireTLS: true,
                auth: {
                    user: "j52323030@gmail.com",
                    pass: 'xhaxzbwrczissgod'
                }
            });

            const mailOptions = {
                from: "j52323030@gmail.com",
                to: contact,
                subject: "Sending email with nodemailer",
                html: `<p>Your OTP is ${otp}</p>`
            };

            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(info.response);
                }
            });
        } catch (err) {
            console.log(err);
        }
    }

    return { otp, contact };
}


