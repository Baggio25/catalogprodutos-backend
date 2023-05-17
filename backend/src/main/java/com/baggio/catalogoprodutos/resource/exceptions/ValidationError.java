package com.baggio.catalogoprodutos.resource.exceptions;

import java.util.ArrayList;
import java.util.List;

import lombok.Getter;

@Getter
public class ValidationError extends StandardError{

	private List<FieldMessage> errors = new ArrayList<FieldMessage>();
		
	public void addError(String field, String message) {
		errors.add(new FieldMessage(field, message));
	}
}
