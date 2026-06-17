import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A5568',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingTop: 40,
    paddingBottom: 32,
    paddingHorizontal: 24,
    width: width * 0.9,
    maxWidth: 380,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
  },
  logoContainer: {
    width: 54,
    height: 54,
    backgroundColor: '#1966CC',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  logoIcon: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '300',
  },
  title: {
    fontSize: 26,
    fontWeight: '500',
    color: '#1E1E1E',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 13,
    color: '#555555',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 24,
    paddingHorizontal: 12,
  },
  boldText: {
    fontWeight: '600',
    color: '#1E1E1E',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 4,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  socialIconContainer: {
    width: 24,
    alignItems: 'center',
    marginRight: 12,
  },
  socialIconText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkedinText: { color: '#0066CC' },
  googleText: { color: '#EA4335' },
  appleText: { color: '#000000' },
  socialLabel: {
    fontSize: 14,
    color: '#2C2C2C',
    fontWeight: '500',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 16,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  separatorText: {
    marginHorizontal: 12,
    color: '#757575',
    fontSize: 11,
    fontWeight: '600',
  },
  footerText: {
    fontSize: 14,
    color: '#2C2C2C',
    textAlign: 'center',
    marginTop: 10,
  },
  footerLink: {
    color: '#1966CC',
    fontWeight: '500',
  },
});