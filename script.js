function showForm() {
    let type = document.getElementById('noteType').value;
    document.getElementById('note1Form').style.display = type === 'note1' ? 'block' : 'none';
    document.getElementById('note2Form').style.display = type === 'note2' ? 'block' : 'none';
    document.getElementById('output').style.display = 'none';
    document.getElementById('copyBtn').style.display = 'none';
    document.getElementById('resetBtn').style.display = 'none';
}

function generateNotes(type) {
    let text = '';

    if (type === 'note1') {
        text = 
`Product affected(Domain | Prod Instance ID): ${document.getElementById('product').value}
How to Replicate/Reproduce the issue/error: ${document.getElementById('replicate').value}
Error Message (if there is one): ${document.getElementById('error').value}
Desired Result: ${document.getElementById('result').value}
What was done/Troubleshooting done: ${document.getElementById('troubleshooting').value}
F-Case: ${document.getElementById('fcase').value}
Additional Notes: ${document.getElementById('notes').value}
How would the client like to be contacted(email or phone)? ${document.getElementById('contact').value}
Newfold Email: ${document.getElementById('email').value}`;
    } 
    else if (type === 'note2') {
        text = 
`F-case: ${document.getElementById('fcase2').value}
The domain name we are launching the website: ${document.getElementById('domainLaunch').value}
Verified the domain is either registered with us or pointed to us: ${document.getElementById('verifiedDomain').value}
Did the customer purchase an SSL?: ${document.getElementById('sslPurchase').value}
Team (PPCC or Other): ${document.getElementById('team').value}
Newfold Email: ${document.getElementById('email2').value}`;
    }

    document.getElementById('output').style.display = "block";
    document.getElementById('copyBtn').style.display = "inline-block";
    document.getElementById('resetBtn').style.display = "inline-block";
    document.getElementById('output').textContent = text;
}

function copyNotes() {
    let text = document.getElementById('output').textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert("Notes copied to clipboard!");
    });
}

function resetForm() {
    // Reset dropdown
    document.getElementById('noteType').value = "";

    // Hide both forms
    document.getElementById('note1Form').reset?.();
    document.getElementById('note2Form').reset?.();
    document.getElementById('note1Form').style.display = 'none';
    document.getElementById('note2Form').style.display = 'none';

    // Clear output & hide buttons
    document.getElementById('output').textContent = '';
    document.getElementById('output').style.display = 'none';
    document.getElementById('copyBtn').style.display = 'none';
    document.getElementById('resetBtn').style.display = 'none';
}
