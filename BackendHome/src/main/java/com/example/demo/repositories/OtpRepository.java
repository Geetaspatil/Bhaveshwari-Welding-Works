package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Otp;

public interface OtpRepository extends JpaRepository<Otp, Integer> {
    Otp findByMobile(String mobile);
}