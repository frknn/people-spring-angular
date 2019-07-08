package com.stajokulu.person.person.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CourseService {
    @Autowired
    private CourseRepository courseRepository;

    public List<Course> getAllCourses(Long personId){
        List<Course> courses = new ArrayList<>();
        courseRepository.findByPersonId(personId)
                .forEach(courses::add);
        return courses;
    }

    public Optional<Course> getCourse(Long id){

        return courseRepository.findById(id);
    }

    public void addCourse(Course course){
        courseRepository.save(course);
    }

    public void updateCourse(Course course){
        courseRepository.save(course);
    }

    public void deleteCourse(Long id){
        courseRepository.deleteById(id);
    }

    public void deleteAllCourses(){
        courseRepository.deleteAll();
    }
}
