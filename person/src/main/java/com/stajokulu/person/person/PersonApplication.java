package com.stajokulu.person.person;

import com.stajokulu.person.person.course.Course;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@Import(Course.class)
@SpringBootApplication
public class PersonApplication {

	public static void main(String[] args) {
		SpringApplication.run(PersonApplication.class, args);
	}

}
