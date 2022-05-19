package com.kalkanb.location.exception;

public class LocationNotFoundException extends RuntimeException {
    private static final String DEFAULT_MESSAGE = "Unknown Error";

    public LocationNotFoundException() {
        super(DEFAULT_MESSAGE);
    }

    public LocationNotFoundException(String message) {
        super(message);
    }

    public LocationNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public LocationNotFoundException(Throwable cause) {
        super(DEFAULT_MESSAGE, cause);
    }
}
