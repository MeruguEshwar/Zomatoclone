package com.ojas.zomato.model;

import java.util.Random;

import jakarta.persistence.GeneratedValue;

public class SendEmail {

	private String recipient;
	private String msgBody;
	private String subject;
	private String attachment;
	
	@GeneratedValue
	private int otp;

	public int getOtp() {
		return otp;
	}

	public void setOtp(int otp) {
		this.otp = otp;
	}

	public String getRecipient() {
		return recipient;
	}

	public void setRecipient(String recipient) {
		this.recipient = recipient;
	}

	public String getMsgBody() {
		return msgBody;
	}

	public void setMsgBody(String msgBody) {
		this.msgBody = msgBody;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getAttachment() {
		return attachment;
	}

	public void setAttachment(String attachment) {
		this.attachment = attachment;
	}

	public SendEmail(String recipient, String msgBody, String subject, String attachment,int otp) {
		this.recipient = recipient;
		this.msgBody = msgBody;
		this.subject = subject;
		this.attachment = attachment;
		this.otp = otp;
	}

	public SendEmail() {

	}

	@Override
	public String toString() {
		return "EmailDetails [recipient=" + recipient + ", msgBody=" + msgBody + ", subject=" + subject
				+ ", attachment=" + attachment + "]";
	}
}
