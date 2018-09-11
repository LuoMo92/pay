package com.wizinno.pay.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * @author LiuMei
 * @date 2018-09-10.
 */
@Controller
public class HelloController {

    @GetMapping("/")
    public String index(ModelMap map) {
        return "index";
    }

}
