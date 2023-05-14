import {illustrationsSet} from "@/core/helpers/config";
import {useThemeStore} from "@/store/theme";

export const getIllustrationsPath = (illustrationName: string): string => {
    const themeStore = useThemeStore();
    const extension = illustrationName.substring(
        illustrationName.lastIndexOf("."),
        illustrationName.length
    );
    const illustration = ( themeStore.getThemeMode() == "dark" ) ?
        `${illustrationName.substring(0,illustrationName.lastIndexOf("."))}-dark` :
        illustrationName.substring(0, illustrationName.lastIndexOf("."));
    return `media/illustrations/${illustrationsSet.value}/${illustration}${extension}`;
};
