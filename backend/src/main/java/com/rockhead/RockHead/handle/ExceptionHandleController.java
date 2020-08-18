package com.rockhead.RockHead.handle;

import com.mongodb.DuplicateKeyException;
import com.mongodb.MongoWriteException;
import com.rockhead.RockHead.response.ResponseModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionHandleController {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> exceptionHandle(Exception ex) {
        return new ResponseEntity<>(new ResponseModel(false, ex.getMessage()), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(value = {DuplicateKeyException.class, MongoWriteException.class})
    public ResponseEntity<?> duplicateKeyExceptionHandle(Exception ex) {
        return new ResponseEntity<>(new ResponseModel(false, "Employee number or email is already exists."), HttpStatus.CONFLICT);
    }
}
