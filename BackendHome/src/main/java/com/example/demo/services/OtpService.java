package com.example.demo.services;

import com.example.demo.entities.Otp;
import com.example.demo.repositories.OtpRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.Random;

@Service
public class OtpService {

    private final OtpRepository repo;

    public OtpService(OtpRepository repo) {
        this.repo = repo;
    }

    public String generateOtp(String mobile) {
        String otp = String.valueOf(100000 + new Random().nextInt(900000)); // 6-digit

        Otp existing = repo.findByMobile(mobile);
        if (existing == null) {
            existing = new Otp();
        }

        existing.setMobile(mobile);
        existing.setOtpCode(otp);
        existing.setExpiresAt(LocalDateTime.now().plusMinutes(2));

        repo.save(existing);
        return otp;
    }

    public boolean validateOtp(String mobile, String otp) {
        Otp savedOtp = repo.findByMobile(mobile);
        if (savedOtp == null) return false;

        if (savedOtp.getOtpCode().equals(otp) &&
            savedOtp.getExpiresAt().isAfter(LocalDateTime.now())) {
            return true;
        }

        return false;
    }
}
