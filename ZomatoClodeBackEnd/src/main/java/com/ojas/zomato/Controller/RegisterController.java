package com.ojas.zomato.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ojas.zomato.Repo.ZomatoCloneRepo;
import com.ojas.zomato.model.Register;

@RestController
@RequestMapping("/register")
@CrossOrigin
public class RegisterController {
	
	@Autowired
	private ZomatoCloneRepo repo;
	
	@PostMapping("/create")
	public Register CreateUser(@RequestBody Register register) {
		return repo.save(register);
	}
	
	@GetMapping("/list")
	public List<Register> getUser(){
		return repo.findAll();
	}
}
