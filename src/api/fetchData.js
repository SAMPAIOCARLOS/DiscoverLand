export async function GetData() {
    try {
        const response = await fetch('/data/data.json');
        if (!response.ok) {
            throw new Error('Rede não está disponível');
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.log("deu ruim!!" + error)
    }
}