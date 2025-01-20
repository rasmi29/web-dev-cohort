# **Questions**

1. **Create a simple web page with the following sections:**
   - **Header with a title and navigation menu**
   - **Main content with a section and article**
   - **Sidebar using `aside` tag for related links**
   - **Footer with copyright information**

2. **Use the `aria` label attribute to improve accessibility in your navigation menu.**

3. **Create a blog post layout using semantic elements such as `article`, `header`, and `footer`.**



# **ARIA Label Explanation**

### **What is `aria-label`?**

The `aria-label` attribute in HTML is used to provide a text description for elements that might not have a visible label but need one for accessibility purposes. It helps screen readers (used by people with visual impairments) understand the purpose of an element, like a button or an icon, that may not have a label or text on it.

In simple terms, it’s like adding a hidden description to an element that can be read out loud by assistive technologies. 

### **Real-Life Example:**

Imagine you have a button that only shows an icon of a shopping cart (like in online stores). Someone who uses a screen reader cannot see the icon, so they don’t know what the button does. Using `aria-label`, you can describe the button’s purpose, like this: "Add to cart."

### **Example in Code:**

Here’s how you might use the `aria-label` in a button element:

```html
<button aria-label="Add to cart">
  <img src="cart-icon.png" alt="Shopping cart icon">
</button>

