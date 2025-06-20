package com.tapKaro.backend.auth;

import com.tapKaro.backend.auth.JwtUtil;
import com.tapKaro.backend.auth.User;
import com.tapKaro.backend.auth.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/signup")
    public String signup(@RequestBody User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return "User registered successfully";
    }

    @PostMapping("/signin")
    public String signin(@RequestBody User user) {
        User dbUser = userRepository.findByUsername(user.getUsername());
        if (dbUser != null && passwordEncoder.matches(user.getPassword(), dbUser.getPassword())) {

            return ("User registered successfully" + jwtUtil.generateToken(dbUser.getUsername()));
        }
        throw new RuntimeException("Invalid credentials");
    }
}