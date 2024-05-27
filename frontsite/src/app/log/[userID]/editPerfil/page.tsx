import HeaderLogado from "@/app/components/headerLogado";
import FormEdit from "@/app/components/formEdit";

const EditPerfil = () => {
    return(
    <>
        <HeaderLogado/>
        <main className='w-svw flex'>
            <div className='w-1/2 h-svh flex flex-col overflow-hidden'>
                <div className="h-1/4 w-full">
                    <img src="/images/imageDemoLogin.png" alt="" />
                </div>
                <div className="h-1/2 w-full flex justify-center">
                    <img src="/images/sad.png" alt="" className="h-2/3 rounded-full border-4 aspect-square"/>
                </div>

            </div>
            <div className="w-1/2 h-svh flex justify-center">
                <FormEdit/>
            </div>
        </main>
    </>
    );
}

export default EditPerfil;