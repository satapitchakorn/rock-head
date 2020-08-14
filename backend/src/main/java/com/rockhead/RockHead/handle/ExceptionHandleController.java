package com.rockhead.RockHead.handle;

import com.rockhead.RockHead.response.ResponseModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionHandleController {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> exceptionHandle(Exception ex) {
        return new ResponseEntity<>(new ResponseModel(false, ex.getMessage()), HttpStatus.FORBIDDEN);
    }

}
