package com.wizinno.pay;

import com.wizinno.pay.web.weixinpay.util.ConfigUtil;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PayApplication {

    public static void main(String[] args) {
        SpringApplication.run(PayApplication.class, args);
        ConfigUtil.init("wxinfo.properties");
    }
}
