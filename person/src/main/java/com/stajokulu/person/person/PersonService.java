package com.stajokulu.person.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class PersonService {

    @Autowired
    PersonRepository personRepository;

    public List<Person> getPeople(){
        return personRepository.findAll();
    }

    public Person getPersonById(@PathVariable Long id){
        Optional<Person> personOptional = personRepository.findById(id);
        if(personOptional.isPresent())
        {
            return personOptional.get();
        }
        return null;
    }

    public Person savePerson(@RequestBody Person person){
        return personRepository.save(person);
    }

    public Person updatePerson(@RequestBody Person person){
        return personRepository.save(person);
    }

    public void deletePerson(@PathVariable Long id){
        personRepository.deleteById(id);
    }
}
