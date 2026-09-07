package com.cl.foodApp.foodApp.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

@Configuration
public class FoodAppConfig {

    @Bean
    public ThreadPoolTaskExecutor createThreads() {
        ThreadPoolTaskExecutor taskExecutor = new ThreadPoolTaskExecutor();
        taskExecutor.setCorePoolSize(10);
        taskExecutor.setMaxPoolSize(30);
        taskExecutor.setQueueCapacity(100);
        taskExecutor.setThreadNamePrefix("foodApp-");
        taskExecutor.initialize();
        return taskExecutor;
    }
}
