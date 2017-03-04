package com.lunguioan.server.exception;

/**
 * Created by Ionut on 3/4/17.
 */
public class NameException extends RuntimeException {

    private String field;
    private String type;

    public NameException(String field) {
        super("Name already exists!");
        this.field = field;
        this.type = "validationError";
    }

    public String getField() {
        return field;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setField(String field) {
        this.field = field;
    }
}
