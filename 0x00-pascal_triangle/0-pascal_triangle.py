def pascal_triangle(n):
    if n <= 0:
        return []

    triangle = [[1]]

    for y in range(1, n):
        row = [1]
        for x in range(1, y):
            row.append(triangle[y-1][x-1] + triangle[y-1][x])
        row.append(1)
        triangle.append(row)

    return triangle