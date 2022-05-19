package com.kalkanb.location.exception;

public class LocationValidationException extends RuntimeException {
    private static final String DEFAULT_MESSAGE = "Unknown Error";

    public LocationValidationException() {
        super(DEFAULT_MESSAGE);
    }

    public LocationValidationException(String message) {
        super(message);
    }

    public LocationValidationException(String message, Throwable cause) {
        super(message, cause);
    }

    public LocationValidationException(Throwable cause) {
        super(DEFAULT_MESSAGE, cause);
    }
}
