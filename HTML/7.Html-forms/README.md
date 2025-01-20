# Questions:

1. Add a phone number field to the form that accepts only numbers.
2. Include a text area for additional comments.
3. Add validation to ensure the password is at least 8 characters long using the pattern attribute.
4. Style the form to center it and add a background color.

---

## Explanation:



### Pattern Attribute:
The `pattern` attribute in HTML is used to define a regular expression that the input field value must match for the form to be considered valid. It helps in validating the input against a specific format, such as a phone number, email, or password pattern.

### Example of Password Validation (Min 8 Characters):
To ensure a password is at least 8 characters long, you can use the `pattern` attribute with a regular expression.

```html
<input type="password" name="password" pattern=".{8,}" required title="Password must be at least 8 characters long">

Here, .{8,} ensures that the password is at least 8 characters long.
```

### Textarea with Rows and Columns

To create a `textarea` with specific rows and columns in HTML, use the `rows` and `cols` attributes. 

### Example:
```html
 <textarea name="comments" rows="4" cols="50"></textarea>
```


