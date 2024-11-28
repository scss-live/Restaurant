 <?php
// Get form data
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

// Check if all required fields are present
if (!empty($name) && !empty($email) && !empty($message)) {
    // Define array to store form data
    $formData = array(
        'name' => $name,
        'email' => $email,
        'message' => $message
    );

    // Get existing data from JSON file (if it exists)
    $existingData = [];
    if (file_exists('data.json')) {
        $existingData = json_decode(file_get_contents('data.json'), true);
    }

    // Add new form data to existing data
    $existingData[] = $formData;

    // Write updated data back to JSON file
    file_put_contents('data.json', json_encode($existingData, JSON_PRETTY_PRINT));

    // Respond with success status and form data
    echo json_encode(array(
        'success' => true,
        'message' => 'Form submitted successfully',
        'data' => $formData
    ));
} else {
    // Respond with error status if required fields are missing
    echo json_encode(array(
        'success' => false,
        'message' => 'Error: Required fields are missing'
    ));
}
?> 
