package com.example.demo.controllers;

import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;
import com.example.demo.services.OtpService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {

    private final OtpService otpService;
    private final UserRepository userRepo;

    public AuthController(OtpService otpService, UserRepository userRepo) {
        this.otpService = otpService;
        this.userRepo = userRepo;
    }

    @PostMapping("/send-otp")
    public String sendOtp(@RequestParam String mobile) {
        String otp = otpService.generateOtp(mobile);
        System.out.println("OTP for " + mobile + ": " + otp);
        return "OTP sent successfully";
    }

    @PostMapping("/verify-otp")
    public String verifyOtp(@RequestParam String mobile, @RequestParam String otp) {
        if (otpService.validateOtp(mobile, otp)) {

            // check if user exists → if not register automatically
            User user = userRepo.findByMobile(mobile);
            if (user == null) {
                user = new User();
                user.setMobile(mobile);
                userRepo.save(user);
            }

            return "Login Successful";
        }

        return "Invalid OTP";
    }
}
