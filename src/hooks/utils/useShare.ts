export const useShare = () => {

    const share = async (title: string, url: string) => {
        if (navigator.share) {
            navigator.share({
                title,
                url,
            })
                .then(() => console.log('성공적으로 공유되었습니다.'))
                .catch((error) => console.log('공유 중 오류가 발생했습니다.', error));
        } else {
            alert('url이 복사되었습니다!');
        }
    }

    return {
        share
    }

}
