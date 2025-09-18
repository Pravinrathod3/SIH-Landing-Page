// @mui
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { SECTION_PATH } from '@/path';

export const hero = {
  chip: {
    label: (
      <>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          one click
        </Typography>
        <Chip
          label={
            <Typography variant="caption" sx={{ color: 'primary.main' }}>
              Data wipe
            </Typography>
          }
          sx={{ height: 24, bgcolor: 'primary.lighter', mr: -1, ml: 0.75, '& .MuiChip-label': { px: 1.25 } }}
          icon={
            <CardMedia
              component="img"
              image="/assets/images/shared/celebration.svg"
              sx={{ width: 16, height: 16 }}
              alt="celebration"
              loading="lazy"
            />
          }
        />
      </>
    )
  },
  headLine: 'Securely Wipe. Confidently Recycle.',
  captionLine: 'A cross-platform, tamper-proof data erasure solution empowering India’s circular economy.',
  primaryBtn: { children: 'Explore Wipeable', href: SECTION_PATH },
      videoSrc: '/assets/videos/data-wipe-video.mp4',
  videoThumbnail: '/assets/videos/thumbnails/datawipe-thumbnail.png',
  listData: [
    { image: '/assets/images/shared/secure.svg', title: 'Highly secured' },
    { image: '/assets/images/shared/easy.png', title: 'easy to use' },
    { image: '/assets/images/shared/certificate.svg', title: 'e-certificate' },
    { image: '/assets/images/shared/one.png', title: 'just one software needed' },
    { image: '/assets/images/shared/sustainability.png', title: 'help sustainability' },
    { image: '/assets/images/shared/affordable.png', title: 'Affordable' },
    { image: '/assets/images/shared/download.png', title: 'Download now' }
  ]
};
