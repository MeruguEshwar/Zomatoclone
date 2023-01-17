package com.ojas.zomato.service;

import java.io.File;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import com.ojas.zomato.model.SendEmail;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailServiceImpl implements EmailService {

	@Autowired(required=true)
	private JavaMailSender javaMailSender;

	@Value("${spring.mail.username}")
	private String sender;
	
	

	@Override
	public String sendSimpleMail(SendEmail details) {

		SimpleMailMessage mailMessage = new SimpleMailMessage();
		mailMessage.setFrom(sender);
		mailMessage.setTo(details.getRecipient());
		mailMessage.setText(details.getMsgBody());
		mailMessage.setSubject(details.getSubject());


		javaMailSender.send(mailMessage);
		return "Mail Sent Successfully...";
	}

	@Override
	public String sendMailWithAttachment(SendEmail details) {
		MimeMessage mimeMessage = javaMailSender.createMimeMessage();
		MimeMessageHelper mimeMessageHelper;

		try {
			mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);
			mimeMessageHelper.setFrom(sender);
			mimeMessageHelper.setTo(details.getRecipient());
			mimeMessageHelper.setText(details.getMsgBody());
			mimeMessageHelper.setSubject(details.getSubject());

			FileSystemResource file = new FileSystemResource(new File(details.getAttachment()));
			mimeMessageHelper.addAttachment(file.getFilename(), file);

			javaMailSender.send(mimeMessage);
			return "Mail sent Successfully";
		} catch (MessagingException e) {

			e.printStackTrace();
		}

		return null;
	}

}
