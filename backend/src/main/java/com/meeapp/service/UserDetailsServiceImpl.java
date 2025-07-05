package com.meeapp.service;

import com.meeapp.entity.User;
import com.meeapp.repository.UserRepository;
import com.meeapp.security.UserPrincipal;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    
    private static final Logger logger = LoggerFactory.getLogger(UserDetailsServiceImpl.class);
    
    @Autowired
    UserRepository userRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        logger.info("Loading user by username: {}", username);
        
        // Try to find by email first, then by username
        User user = userRepository.findByEmail(username)
                .orElse(userRepository.findByUsername(username)
                        .orElseThrow(() -> {
                            logger.error("User not found with username/email: {}", username);
                            return new UsernameNotFoundException("User Not Found with username/email: " + username);
                        }));

        logger.info("User found: {}", user.getEmail());
        return UserPrincipal.create(user);
    }
}