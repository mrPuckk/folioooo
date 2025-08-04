---
title: "Mathematical Content Demo"
date: "2024-12-19"
coverImage: "/avatar.jpg"
excerpt: "Demonstration of LaTeX math rendering and enhanced markdown features."
category: "demo"
featured: false
tech: ["LaTeX", "Markdown", "React"]
tags: ["Math", "Demo", "LaTeX"]
---

# Mathematical Content Demo

This page demonstrates the enhanced markdown and LaTeX rendering capabilities.

## Inline Math

You can write inline math expressions like $E = mc^2$ or $\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$.

## Block Math

For larger mathematical expressions, use block math:

$$
\begin{align}
\nabla \cdot \vec{E} &= \frac{\rho}{\epsilon_0} \\
\nabla \cdot \vec{B} &= 0 \\
\nabla \times \vec{E} &= -\frac{\partial \vec{B}}{\partial t} \\
\nabla \times \vec{B} &= \mu_0\vec{J} + \mu_0\epsilon_0\frac{\partial \vec{E}}{\partial t}
\end{align}
$$

## Code Examples

### Verilog Code

```verilog
module NeuralEngine (
    input wire clk,
    input wire rst_n,
    input wire [31:0] input_data,
    input wire data_valid,
    output reg [31:0] output_data,
    output reg output_valid
);

    // Matrix multiplication unit
    reg [31:0] weight_matrix [0:255][0:255];
    reg [31:0] activation_buffer [0:255];
    reg [7:0] layer_index;
    
    // Processing pipeline
    always @(posedge clk or negedge rst_n) begin
        if (!rst_n) begin
            layer_index <= 8'h00;
            output_valid <= 1'b0;
        end else begin
            if (data_valid) begin
                // Load input data
                activation_buffer[0] <= input_data;
                
                // Matrix multiplication
                for (int i = 0; i < 256; i = i + 1) begin
                    activation_buffer[i] <= 
                        activation_buffer[i] * weight_matrix[layer_index][i];
                end
                
                // Activation function
                output_data <= relu(activation_buffer[0]);
                output_valid <= 1'b1;
                layer_index <= layer_index + 1;
            end
        end
    end

endmodule
```

### Python Code

```python
import numpy as np
import matplotlib.pyplot as plt

def neural_network_forward(X, W1, W2, b1, b2):
    """
    Forward pass of a 2-layer neural network
    """
    # First layer
    Z1 = np.dot(X, W1) + b1
    A1 = np.tanh(Z1)
    
    # Second layer
    Z2 = np.dot(A1, W2) + b2
    A2 = sigmoid(Z2)
    
    return A2

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

# Example usage
X = np.random.randn(100, 784)  # 100 samples, 784 features
W1 = np.random.randn(784, 256)  # First layer weights
W2 = np.random.randn(256, 10)   # Second layer weights
b1 = np.zeros((1, 256))         # First layer bias
b2 = np.zeros((1, 10))          # Second layer bias

output = neural_network_forward(X, W1, W2, b1, b2)
print(f"Output shape: {output.shape}")
```

## Complex Mathematical Expressions

### Matrix Operations

$$
\begin{bmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{bmatrix}
\begin{bmatrix}
x_1 \\
x_2 \\
x_3
\end{bmatrix} =
\begin{bmatrix}
b_1 \\
b_2 \\
b_3
\end{bmatrix}
$$

### Calculus

The derivative of a function $f(x)$ is defined as:

$$f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}$$

### Statistics

The normal distribution is given by:

$$f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}$$

## Lists and Formatting

### Features

- **Bold text** and *italic text*
- `Inline code` and code blocks
- [Links](https://example.com)
- Mathematical expressions
- Syntax highlighting

### Numbered Lists

1. First item
2. Second item
3. Third item with **bold** and *italic*

## Tables

| Feature | Support | Notes |
|---------|---------|-------|
| Inline Math | ✅ | $E = mc^2$ |
| Block Math | ✅ | Full LaTeX support |
| Code Highlighting | ✅ | Multiple languages |
| Tables | ✅ | Responsive design |
| Links | ✅ | External links supported |

## Blockquotes

> This is a blockquote with some important information.
> 
> It can span multiple lines and contain **bold** and *italic* text.

---

This demonstrates the enhanced markdown and LaTeX rendering capabilities of the new system. 