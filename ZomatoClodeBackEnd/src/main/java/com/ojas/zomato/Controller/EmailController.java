package com.ojas.zomato.Controller;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ojas.zomato.model.SendEmail;
import com.ojas.zomato.service.EmailService;

@RestController
@RequestMapping("/mail")
@CrossOrigin
public class EmailController {

	@Autowired(required=true)
	private EmailService emailservice;

	@PostMapping("/sendMail")
	public String sendMail(@RequestBody SendEmail details) {
		String status = emailservice.sendSimpleMail(details);
		return status;
	}
	

	@GetMapping("/test")
	public int test() {
		
		Random rn = new Random();

		// Random method called for integer values with fixed value.
		int num = rn.nextInt(1000000);
		String number = "123456";

		// show Random with 6 digits number.
		if (num > 100000) {
			number = String.valueOf(num);
			System.out.println("Your OTP is : " + num);
		} else {
			System.out.println("Retry!");
		}
		
		return num;
	}

	@PostMapping("/sendMailWithAttachment")
	public String sendMailWithAttachment(@RequestBody SendEmail details) {
		String status = emailservice.sendMailWithAttachment(details);

		return status;
	}

}
