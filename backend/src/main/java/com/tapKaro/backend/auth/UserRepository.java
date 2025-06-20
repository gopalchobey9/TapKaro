package com.tapKaro.backend.auth;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tapKaro.backend.auth.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}