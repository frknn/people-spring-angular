package com.stajokulu.person.person.course;

import com.stajokulu.person.person.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class CourseController {
    @Autowired
    private CourseService courseService;

    @GetMapping("/person/{id}/courses")
    public List<Course> getAllCourses(@PathVariable Long id){
        return courseService.getAllCourses(id);
    }

    @GetMapping("/person/{personId}/courses/{id}")
    public Optional<Course> getCourse(@PathVariable Long personId){
        return courseService.getCourse(personId);
    }

    @PostMapping("/person/{personId}/courses")
    public void addCourse(@RequestBody Course course, @PathVariable Long personId){
        course.setPerson(new Person(personId,"",""));
        courseService.addCourse(course);
    }

    @PutMapping("person/{personId}/courses/{id}")
    public void updateCourse(@RequestBody Course course, @PathVariable Long personId, @PathVariable Long id){
        course.setPerson(new Person(personId,"",""));
        courseService.updateCourse(course);
    }

    @DeleteMapping("/person/{personId}/courses/{id}")
    public void deleteCourse(@PathVariable Long id){
        courseService.deleteCourse(id);
    }

    @DeleteMapping("/person/{personId}/courses")
    public void deleteAllCourses(){
        courseService.deleteAllCourses();
    }
}
