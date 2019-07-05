package com.stajokulu.person.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class PersonController {

    @Autowired
    PersonService personService;

    @GetMapping("/hello")
    public String sayHello(){
        return "Hello StajOkulu!";
    }

    @GetMapping("/person")
    public List<Person> getPeople(){
        return personService.getPeople();
    }

    @GetMapping("/person/{id}")
    public Person getPersonById(@PathVariable Long id){
        Optional<Person> personOptional = Optional.ofNullable(personService.getPersonById(id));
        if(personOptional.isPresent())
        {
            return personOptional.get();
        }
        return null;
    }

    @PostMapping("/person")
    public Person savePerson(@RequestBody Person person){
        return personService.savePerson(person);
    }

    @PutMapping("/person")
    public void updatePerson(@RequestBody Person person){
        personService.updatePerson(person);
    }

    @DeleteMapping("/person/{id}")
    public void deletePerson(@PathVariable Long id){
        personService.deletePerson(id);
    }
}
