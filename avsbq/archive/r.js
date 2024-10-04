async function fetchPaths() {
    const response = await fetch('http://archive.avsbq.org/s.json');
    const paths = await response.json();
    return paths;
}

async function goToRandomPage() {
    const paths = await fetchPaths();
    
    // Filter out paths containing a dot and paths in the "misc/personal/school" directory
    const filteredPaths = paths.filter(path => 
        !path.includes('.') && !path.startsWith('misc/personal/school')
    );
    
    // Select a random path from the filtered paths
    const randomPath = filteredPaths[Math.floor(Math.random() * filteredPaths.length)];
    
    // Redirect to the new URL
    window.location.assign(`http://archive.avsbq.org/${randomPath}`);
}

