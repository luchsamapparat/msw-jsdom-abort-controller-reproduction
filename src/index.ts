export async function example() {
    const response = await fetch('http://example.org');
    return response.text();
}