package com.kalkanb.location.exception;

public class LocationException extends RuntimeException {
    private static final String DEFAULT_MESSAGE = "Unknown Error";

    public LocationException() {
        super(DEFAULT_MESSAGE);
    }

    public LocationException(String message) {
        super(message);
    }

    public LocationException(String message, Throwable cause) {
        super(message, cause);
    }

    public LocationException(Throwable cause) {
        super(DEFAULT_MESSAGE, cause);
    }
}
