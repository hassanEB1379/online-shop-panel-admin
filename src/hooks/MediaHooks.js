import { uploadSingleFile } from 'api/MediaApi';
import { getMedia } from 'api/MediaApi';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export function useAllMedia() {
  return useQuery('media', getMedia, { retry: false });
}

export function useUploadFile() {
  const queryClient = useQueryClient();

  return useMutation(uploadSingleFile, {
    onSuccess: () => {
      queryClient.refetchQueries('media');
    },
  });
}

export function useDeleteFile() {}
