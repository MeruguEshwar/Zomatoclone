package com.ojas.zomato.service;

import com.ojas.zomato.model.SendEmail;

public interface EmailService {

	String sendSimpleMail(SendEmail details);

	String sendMailWithAttachment(SendEmail details);

}
