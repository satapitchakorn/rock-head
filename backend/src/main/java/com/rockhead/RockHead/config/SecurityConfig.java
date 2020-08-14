package com.rockhead.RockHead.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;

@Configuration
@EnableWebSecurity
@EnableScheduling
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.cors().and().authorizeRequests().antMatchers("/api/v1/**", "/resources/**", "/static/**", "/img/**")
                .permitAll().anyRequest().fullyAuthenticated().and().httpBasic().and().sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED).and().csrf().disable();
    }
}
