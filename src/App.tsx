import { BrowserRouter as Router } from "react-router-dom";

// Components Import
import AppRoutesConfig from "@/components/routes/app-routes-config";
import ModalContainer from "@/components/modals/view";
import DrawerContainer from "@/components/drawers/view";
import GalleryCarouselView from "@/components/gallery/view";
import { Toaster } from "@/components/ui/sonner";

function App() {
    return (
        <div className="flex min-h-full flex-col">
            <Router>
                <AppRoutesConfig />
                <Toaster />
                <ModalContainer />
                <DrawerContainer />
                <GalleryCarouselView />
            </Router>
        </div>
    );
}

export default App;
