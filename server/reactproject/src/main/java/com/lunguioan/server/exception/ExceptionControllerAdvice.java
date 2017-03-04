package com.lunguioan.server.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

/**
 * Created by Ionut on 3/4/17.
 * A controller advice is a global exception handler; It's used to put exception status and possibly modify data
 */
@ControllerAdvice
public class ExceptionControllerAdvice {

    //HttpStatus.CONFLICT = 409
    @ExceptionHandler(NameException.class)
    public ResponseEntity<NameException> handleNameException(NameException ex) {

        return new ResponseEntity<>(ex, HttpStatus.CONFLICT);
    }
}
