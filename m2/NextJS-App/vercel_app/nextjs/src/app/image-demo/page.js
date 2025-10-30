import Image from "next/image";

const ImageDemo = () => {
    return(
        <>
            <h1>Images Demo</h1>
            <div>
                <h2>Image using img tag</h2>
                <img src="/flower.jpg" alt="Flower" width={500} heigth={400} />
            </div>
            <div>
                <h2>Image using &lt;Image&gt; component</h2>
                <Image src="/flower.jpg" width={500} height={400} alt="Flower Image" />
            </div>
            <div>
                <h2>Remote Image using img tag</h2>
                <img src="https://i.pinimg.com/736x/4f/7a/f9/4f7af96819b05591c4ce89017ccb40db.jpg" />
            </div>

            <div>
                <h2>Remote Image using Image component</h2>
                <Image src="https://i.pinimg.com/736x/4f/7a/f9/4f7af96819b05591c4ce89017ccb40db.jpg" width={768} height={500} alt="Nature Image"/>
            </div>

        </>
    )
};

export default ImageDemo;